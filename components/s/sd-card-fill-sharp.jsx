import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5oe_f6gc {
  fill: currentColor;
  d: path("M8.293 2.293A1 1 0 0 1 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7c0-.265.105-.52.293-.707ZM11 7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 3V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0");
}
</style><path class="v5oe_f6gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-fill-sharp"} {...others} />);
}

export default Component;
