import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4e159bei.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k4e159bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tag-2"} {...others} />);
}

export default Component;
