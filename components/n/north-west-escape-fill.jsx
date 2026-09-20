import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r67n7p6du.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r67n7p6du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:north-west-escape-fill"} {...others} />);
}

export default Component;
