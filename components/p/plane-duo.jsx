import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lskr6z3ls.css';
import '../../css/i/ius8nukxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lskr6z3ls secondary"/><path class="ius8nukxs primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plane-duo"} {...others} />);
}

export default Component;
