import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9y8i63tx.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9y8i63tx"/><path class="jor-usn7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-down-right-square"} {...others} />);
}

export default Component;
