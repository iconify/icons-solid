import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmu6wq9zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gmu6wq9zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clipboard-list"} {...others} />);
}

export default Component;
