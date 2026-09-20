import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqldz6btv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jqldz6btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:eject-outline"} {...others} />);
}

export default Component;
