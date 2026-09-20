import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gooeucbxo {
  fill: currentColor;
  d: path("M20 22V2h2v20zm-6-5V7h3v10zm-6 0V7h3v10z");
}
</style><path class="gooeucbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-justify-flex-end-sharp"} {...others} />);
}

export default Component;
