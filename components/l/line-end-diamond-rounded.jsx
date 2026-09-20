import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruaou0bvo {
  fill: currentColor;
  d: path("M14.3 18.3L9 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h6l5.3-5.3q.3-.3.7-.3t.7.3l5.6 5.6q.3.3.3.7t-.3.7l-5.6 5.6q-.3.3-.7.3t-.7-.3");
}
</style><path class="ruaou0bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-diamond-rounded"} {...others} />);
}

export default Component;
