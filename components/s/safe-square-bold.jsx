import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycq6r6b3w.css';
import '../../css/a/a2habdbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycq6r6b3w"/><path clip-rule="evenodd" class="a2habdbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-square-bold"} {...others} />);
}

export default Component;
