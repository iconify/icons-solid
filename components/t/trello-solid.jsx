import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl49b_58y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fl49b_58y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:trello-solid"} {...others} />);
}

export default Component;
