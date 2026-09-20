import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.tp7w9wbsw {
  fill: var(--svg-color--46ebe1, #46ebe1);
  d: path("M30 6.48H18.24V2h-14v4.48H2v10.64h2.24v8.34c0 2.5 2.03 4.54 4.54 4.54H30V19.36H18.24v-2.24h7.22c2.5 0 4.54-2.03 4.54-4.54z");
}
</style><path class="tp7w9wbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-ty"} {...others} />);
}

export default Component;
