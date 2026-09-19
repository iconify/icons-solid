import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyvrhuu2d.css';
import '../../css/u/uz5eyob-g.css';
import '../../css/n/n6npgcbbo.css';
import '../../css/y/ymugftbql.css';
import '../../css/x/x3zud0byo.css';
import '../../css/x/xqj0kzcvg.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="yyvrhuu2d"/><path class="uz5eyob-g"/><circle class="n6npgcbbo"/><path class="ymugftbql"/><circle class="x3zud0byo"/><path class="xqj0kzcvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-event-automation"} {...others} />);
}

export default Component;
