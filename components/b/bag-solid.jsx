import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi0qeri7g.css';
import '../../css/a/a_bjixb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zi0qeri7g"/><path class="a_bjixb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:bag-solid"} {...others} />);
}

export default Component;
