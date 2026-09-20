import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rkgiwqbgu {
  fill: var(--svg-color--fc6515, #fc6515);
  d: path("M2 16h14V2h14v28H2z");
}
</style><path class="rkgiwqbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-quokka"} {...others} />);
}

export default Component;
