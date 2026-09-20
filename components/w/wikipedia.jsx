import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r04ouyb7p.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="r04ouyb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:wikipedia"} {...others} />);
}

export default Component;
