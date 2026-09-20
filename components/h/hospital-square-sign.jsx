import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g94-_8blp.css';
import '../../css/n/n7f03-b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g94-_8blp"/><path class="n7f03-b9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:hospital-square-sign"} {...others} />);
}

export default Component;
