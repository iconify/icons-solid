import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hnmcryjii.css';
import '../../css/e/eqmg9ccuy.css';
import '../../css/g/gh4871b7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hnmcryjii"/><path class="eqmg9ccuy"/><path class="gh4871b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bus-2"} {...others} />);
}

export default Component;
