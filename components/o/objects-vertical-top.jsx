import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eghrhdq2l.css';
import '../../css/a/atosfkhsl.css';
import '../../css/j/jfwb-ipvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eghrhdq2l"/><rect class="atosfkhsl"/><rect class="jfwb-ipvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:objects-vertical-top"} {...others} />);
}

export default Component;
