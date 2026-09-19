import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nqrxnybto {
  fill: currentColor;
  d: path("M22 4H2v16h20zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4zm7 4.74h-6V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25z");
}
</style><path class="nqrxnybto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-fiber-new"} {...others} />);
}

export default Component;
