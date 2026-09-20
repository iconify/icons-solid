import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.l9x72pb9o {
  fill: var(--svg-color--82b816, #82b816);
  d: path("m25.628 18l-4.209 7.252H10.806L5.5 16.108L9.739 8.8L7.4 4.981A14.03 14.03 0 1 0 30 18z");
}

.o6usuegte {
  fill: var(--svg-color--006532, #006532);
  d: path("M21.061 15.963a5.026 5.026 0 1 1-5.026-5a5.013 5.013 0 0 1 5.026 5");
}

.rjf2bzb-b {
  fill: var(--svg-color--006533, #006533);
  d: path("M13.5 6.965h7.923l4 6.887h4.557a14.1 14.1 0 0 0-18.956-10.92z");
}
</style><path class="rjf2bzb-b"/><path class="l9x72pb9o"/><path class="o6usuegte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-gradle2"} {...others} />);
}

export default Component;
