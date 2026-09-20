import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnvdesbnf.css';
import '../../css/u/ur9gklu2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnvdesbnf"/><path class="ur9gklu2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-list-approve-bold"} {...others} />);
}

export default Component;
