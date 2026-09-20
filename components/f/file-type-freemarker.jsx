import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ko1qe7lwr {
  fill: var(--svg-color--0050b2, #0050b2);
  d: path("m24.023 20.9l1.385 2.1l4.615-7l-4.615-7l-1.385 2.1l3.232 4.9ZM7.977 11.1L6.592 9l-4.615 7l4.615 7l1.385-2.1L4.745 16ZM13.035 9h2.8l-.494 2.8h2.8l.494-2.8h2.8l-.494 2.8h2.8l-.495 2.8h-2.8l-.493 2.8h2.8l-.494 2.8h-2.8l-.492 2.8h-2.8l.493-2.8h-2.8l-.485 2.8h-2.808l.493-2.8h-2.8l.494-2.8h2.8l.493-2.793h-2.8l.494-2.807h2.8Zm1.319 8.4h2.8l.494-2.8h-2.8Z");
}
</style><path class="ko1qe7lwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-freemarker"} {...others} />);
}

export default Component;
