import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.asxd0dr5j {
  fill: var(--svg-color--20b4ae, #20b4ae);
  d: path("M8 9.859V2h6.818v10.376Zm0 2.461l4.666 1.723L8 15.764Zm6.818 3.389v3.805L11.5 30H8V18.225ZM24 9.859V2h-6.819v10.376Zm0 2.461l-4.668 1.723L24 15.764Zm-6.819 3.389v3.805L20.5 30H24V18.225Z");
}
</style><path class="asxd0dr5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-ballerina"} {...others} />);
}

export default Component;
