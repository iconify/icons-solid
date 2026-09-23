import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6v10ib0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6v10ib0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:variable-sharp-fill"} {...others} />);
}

export default Component;
