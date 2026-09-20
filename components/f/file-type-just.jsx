import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ebyf81b9p {
  cx: 16px;
  cy: 23.3px;
  fill: var(--svg-color--fff, #fff);
  rx: 3.8px;
  ry: 3.9px;
}

.lmh4whbrs {
  cx: 16px;
  cy: 16px;
  r: 14px;
}

.m96ir8bsl {
  cx: 16px;
  cy: 8.7px;
  fill: var(--svg-color--fff, #fff);
  rx: 3.8px;
  ry: 3.9px;
}
</style><circle class="lmh4whbrs"/><ellipse class="m96ir8bsl"/><ellipse class="ebyf81b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-just"} {...others} />);
}

export default Component;
