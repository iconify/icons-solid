import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whshsh-ji.css';
import '../../css/w/w5vciu9yy.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/n/n2tfkjblv.css';
import '../../css/j/j9wt5cc4j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="whshsh-ji"/><path class="w5vciu9yy"/><g class="wtfmx7b3v"><path class="n2tfkjblv"/><path class="j9wt5cc4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:lock-landscape"} {...others} />);
}

export default Component;
