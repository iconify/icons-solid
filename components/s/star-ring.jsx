import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b65-p4bii.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b65-p4bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-ring"} {...others} />);
}

export default Component;
