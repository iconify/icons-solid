import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wtypjlrbc.css';
import '../../css/p/pobka0boh.css';
import '../../css/p/py3r5zb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="wtypjlrbc"/><path class="pobka0boh"/><path class="py3r5zb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cog"} {...others} />);
}

export default Component;
