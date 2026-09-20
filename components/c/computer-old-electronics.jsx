import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7keyur9y.css';
import '../../css/p/pwjb53wlt.css';
import '../../css/c/c2kgr46-c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g7keyur9y"/><path class="pwjb53wlt"/><path class="c2kgr46-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computer-old-electronics"} {...others} />);
}

export default Component;
