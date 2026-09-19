import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/n4hxxk--c.css';
import '../../css/e/ehbze3eqr.css';
import '../../css/j/j2zc1ug1g.css';
import '../../css/a/aqk8hqzbn.css';
import '../../css/s/snv7qzlxz.css';
import '../../css/i/iwype9b_a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="n4hxxk--c"/><path class="ehbze3eqr"/><path class="j2zc1ug1g"/><path class="aqk8hqzbn"/><path class="snv7qzlxz"/><path class="iwype9b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-bottom"} {...others} />);
}

export default Component;
