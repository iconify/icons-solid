import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.lbk6cu_lh {
  fill: var(--svg-color--gray, gray);
  d: path("M12.068 2h6.866l-2.73 8.421l7.322-1.331L13.115 30l3.037-14.505L8.474 17z");
}
</style><path class="lbk6cu_lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-volt"} {...others} />);
}

export default Component;
