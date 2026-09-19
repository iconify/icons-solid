import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yql18qmak.css';
import '../../css/v/vl74f78rx.css';
import '../../css/s/s-4zylh0k.css';
import '../../css/w/w774icace.css';
import '../../css/z/z5d9efpxq.css';
import '../../css/b/bkt3334uf.css';
import '../../css/j/jaj7uqbhp.css';
import '../../css/e/en_uwob0z.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="yql18qmak"/><circle class="vl74f78rx"/><circle class="s-4zylh0k"/><circle class="w774icace"/><circle class="z5d9efpxq"/><circle class="bkt3334uf"/><circle class="jaj7uqbhp"/><path class="en_uwob0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cookie"} {...others} />);
}

export default Component;
