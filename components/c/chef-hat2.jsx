import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j__43mbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j__43mbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chef-hat2"} {...others} />);
}

export default Component;
