import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab2by8v5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab2by8v5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:more-circle3"} {...others} />);
}

export default Component;
