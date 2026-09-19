import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9k7-db_t.css';
import '../../css/z/zlacpiy1f.css';
import '../../css/h/hnpx1cg6w.css';
import '../../css/w/w91--wivs.css';
import '../../css/s/s3md2o4di.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x9k7-db_t"/><path class="zlacpiy1f"/><path class="hnpx1cg6w"/><path class="w91--wivs"/><path class="s3md2o4di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:bicycle"} {...others} />);
}

export default Component;
