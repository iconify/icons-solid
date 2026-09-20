import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/viy1xcf2o.css';
import '../../css/b/bfttbipxd.css';
import '../../css/e/ef230lwsc.css';
import '../../css/r/r5dg5ebxv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><path class="viy1xcf2o"/><path class="bfttbipxd"/></g><path class="ef230lwsc"/><path class="r5dg5ebxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:thought-balloon"} {...others} />);
}

export default Component;
