import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.si230ctna {
  fill: currentColor;
  d: path("M4 22V4h5V2h2v2h2V2h2v2h5v18zm4-12h8V8H8zm4 8q1.05 0 1.775-.712t.725-1.738q0-.825-.475-1.412T12 11.75q-1.575 1.8-2.037 2.4t-.463 1.4q0 1.025.725 1.738T12 18");
}
</style><path class="si230ctna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gas-meter-sharp"} {...others} />);
}

export default Component;
