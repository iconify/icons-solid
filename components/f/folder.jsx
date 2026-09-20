import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd3-z6bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zd3-z6bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder"} {...others} />);
}

export default Component;
