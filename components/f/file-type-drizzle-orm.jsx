import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.l0cuq3bsv {
  width: 9.631px;
  height: 40.852px;
  x: 115.859px;
  y: 12.451px;
  rx: 4.816px;
}

.m00li1bzt {
  fill: var(--svg-color--c5f74f, #c5f74f);
}

.nt-s71b2m {
  width: 9.631px;
  height: 40.852px;
  x: 71.193px;
  y: 37.556px;
  rx: 4.816px;
}

.wj3cn1bex {
  width: 9.631px;
  height: 40.852px;
  x: 134.57px;
  y: -22.003px;
  rx: 4.816px;
}

.x6l90cc0p {
  width: 9.631px;
  height: 40.852px;
  x: 89.898px;
  y: 3.105px;
  rx: 4.816px;
}
</style><g transform="matrix(.22192 .12396 -.12639 .22055 -4.336 -3.57)" class="m00li1bzt"><rect class="nt-s71b2m"/><rect class="x6l90cc0p"/><rect class="wj3cn1bex"/><rect class="l0cuq3bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-drizzle-orm"} {...others} />);
}

export default Component;
