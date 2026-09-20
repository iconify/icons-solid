import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg9ybob4q.css';
import '../../css/d/ddawe438c.css';
import '../../css/j/jdxlagbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eg9ybob4q"/><path class="ddawe438c"/><path class="jdxlagbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:picture-stack-landscape-bold"} {...others} />);
}

export default Component;
