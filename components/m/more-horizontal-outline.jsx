import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1xy6nh9u.css';
import '../../css/d/dq12o7ykb.css';
import '../../css/b/b74ikwezj.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n1xy6nh9u"/><circle class="dq12o7ykb"/><circle class="b74ikwezj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:more-horizontal-outline"} {...others} />);
}

export default Component;
