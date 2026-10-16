import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bryv9-bhw.css';
import '../../css/k/kb7fl3kua.css';
import '../../css/g/gd-r2cbpj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bryv9-bhw"/><path class="kb7fl3kua"/><path class="gd-r2cbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:worm-gear-20-bold"} {...others} />);
}

export default Component;
