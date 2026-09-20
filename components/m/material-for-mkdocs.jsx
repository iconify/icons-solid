import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voypd9b9h.css';
import '../../css/a/awbal7krk.css';
import '../../css/f/fj-jyhb0m.css';
import '../../css/f/faqsbacrx.css';
import '../../css/m/mc9tj5b-s.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="voypd9b9h"/><path class="awbal7krk"/><path class="fj-jyhb0m"/><path class="faqsbacrx"/><path class="mc9tj5b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:material-for-mkdocs"} {...others} />);
}

export default Component;
