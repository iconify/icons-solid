import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1a8a243t.css';
import '../../css/f/fkfwtja1r.css';
import '../../css/n/niz7j71ie.css';
import '../../css/t/txvtnaccs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o1a8a243t"/><circle class="fkfwtja1r"/><path class="niz7j71ie"/><path class="txvtnaccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-volume-alt"} {...others} />);
}

export default Component;
