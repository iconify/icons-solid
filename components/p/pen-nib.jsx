import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg5jky73y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gg5jky73y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-nib"} {...others} />);
}

export default Component;
