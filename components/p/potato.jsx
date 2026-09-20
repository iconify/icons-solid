import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp0ga-bzb.css';
import '../../css/e/eztqw9biy.css';
import '../../css/i/id9r5eb8j.css';
import '../../css/z/zv7u4ztow.css';
import '../../css/v/vyylo5bmo.css';
import '../../css/a/ae849gbxa.css';
import '../../css/r/rwfzimbef.css';
import '../../css/u/uzfhvxbfi.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGxYzQFeJE" class="bp0ga-bzb"/></defs><g class="eztqw9biy"><path class="id9r5eb8j"/><path class="zv7u4ztow"/><circle class="vyylo5bmo"/></g><use href="#SVGxYzQFeJE" class="ae849gbxa"/><circle class="rwfzimbef"/><circle class="uzfhvxbfi"/><use href="#SVGxYzQFeJE" class="ae849gbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:potato"} {...others} />);
}

export default Component;
