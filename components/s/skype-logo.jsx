import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2ez4zu5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2ez4zu5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skype-logo"} {...others} />);
}

export default Component;
