import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6rs0mdyf.css';
import '../../css/n/n2ec6pqml.css';
import '../../css/k/knlj4gbqj.css';
import '../../css/y/ygi5pmbyn.css';
import '../../css/v/vnu3i3b9u.css';
import '../../css/a/aq4qothdm.css';
import '../../css/v/vl5bkqbvu.css';
import '../../css/i/i0tcg63gs.css';
import '../../css/b/bviwjp8rt.css';
import '../../css/g/g14ataboi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a6rs0mdyf"/><path class="n2ec6pqml"/><path class="knlj4gbqj"/><path class="ygi5pmbyn"/><path class="vnu3i3b9u"/><path class="aq4qothdm"/><path class="vl5bkqbvu"/><path class="i0tcg63gs"/><path class="bviwjp8rt"/><path class="g14ataboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:eye"} {...others} />);
}

export default Component;
