import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezvt27u4q {
  fill: var(--svg-color--7c4dff, #7c4dff);
  d: path("M12.969 12L21 7.671l-1.35-2.618l-7.354 3a.78.78 0 0 1-.59 0L4.35 5.056L3 7.67L11.032 12L3 16.328l1.35 2.618l7.355-3a.77.77 0 0 1 .588 0l7.355 3l1.35-2.618L12.966 12z");
}
</style><path class="ezvt27u4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:utk"} {...others} />);
}

export default Component;
