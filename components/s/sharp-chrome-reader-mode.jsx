import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0w4lmbal {
  fill: currentColor;
  d: path("M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z");
}
</style><path class="h0w4lmbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-chrome-reader-mode"} {...others} />);
}

export default Component;
