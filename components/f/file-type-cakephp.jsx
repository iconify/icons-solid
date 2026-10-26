import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.d68yqf-rm {
  fill: var(--svg-color--d43d44, #d43d44);
}

.oar8n3bjx {
  d: path("M2 18.18v4.37c0 2.42 6.26 4.37 14 4.37v-4.37c-7.74.01-14-1.95-14-4.37");
}

.sis47obof {
  d: path("m16 13.82l10.95 2.7c1.9-.74 3.05-1.68 3.05-2.7V9.45c0-2.42-6.27-4.37-14-4.37S2 7.03 2 9.45v4.37c0 2.41 6.26 4.36 14 4.36zm10.94 7.08l-10.95-2.72v4.37l10.95 2.73c1.9-.75 3.05-1.7 3.05-2.73v-4.37c0 1.04-1.14 1.98-3.05 2.73");
}
</style><g class="d68yqf-rm"><path class="sis47obof"/><path class="oar8n3bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-cakephp"} {...others} />);
}

export default Component;
