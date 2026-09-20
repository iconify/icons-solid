import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yysb2trkq {
  fill: currentColor;
  d: path("M2 18V6h5v6h2V6h2v6h2V6h2v6h2V6h5v12z");
}
</style><path class="yysb2trkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:straighten-sharp"} {...others} />);
}

export default Component;
