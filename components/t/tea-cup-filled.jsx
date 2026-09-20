import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3qeq8b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j3qeq8b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tea-cup-filled"} {...others} />);
}

export default Component;
