import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.buf2o5bsv {
  fill: currentColor;
  d: path("M13 17H2V3h2v12h9zm5.4 4L15 14H5.5V3h6v6h4.225l3.975 8.1l2.45-1.125l1.425 2.625z");
}
</style><path class="buf2o5bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-legroom-extra-sharp"} {...others} />);
}

export default Component;
